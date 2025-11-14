import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Review {
  id: string;
  rating: number;
  comment: string | null;
  created_at: string;
}

interface ReviewSectionProps {
  type: "listing" | "seller";
  targetId: string;
  currentUserId?: string;
}

export const ReviewSection = ({ type, targetId, currentUserId }: ReviewSectionProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [hoveredRating, setHoveredRating] = useState(0);
  const { toast } = useToast();

  const tableName = type === "listing" ? "listing_reviews" : "seller_reviews";
  const targetColumn = type === "listing" ? "listing_id" : "seller_id";

  useEffect(() => {
    fetchReviews();
  }, [targetId]);

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from(tableName)
        .select("id, rating, comment, created_at")
        .eq(targetColumn, targetId)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setReviews(data || []);
    } catch (error: any) {
      console.error("Erro ao carregar avaliações:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!currentUserId) {
      toast({ title: "Erro", description: "Você precisa estar logado", variant: "destructive" });
      return;
    }

    if (rating === 0) {
      toast({ title: "Erro", description: "Selecione uma nota", variant: "destructive" });
      return;
    }

    setSubmitting(true);

    try {
      if (type === "listing") {
        const { error } = await supabase
          .from("listing_reviews")
          .insert({
            listing_id: targetId,
            user_id: currentUserId,
            rating,
            comment: comment.trim() || null
          });

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("seller_reviews")
          .insert({
            seller_id: targetId,
            reviewer_id: currentUserId,
            rating,
            comment: comment.trim() || null
          });

        if (error) throw error;
      }

      toast({ title: "Sucesso!", description: "Avaliação enviada" });
      setRating(0);
      setComment("");
      fetchReviews();
    } catch (error: any) {
      toast({ title: "Erro", description: error.message, variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  const calculateAverage = () => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / reviews.length).toFixed(1);
  };

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <h3 className="text-2xl font-bold">Avaliações</h3>
        {reviews.length > 0 && (
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 fill-warning text-warning" />
            <span className="text-lg font-semibold">{calculateAverage()}</span>
            <span className="text-sm text-muted-foreground">({reviews.length} avaliações)</span>
          </div>
        )}
      </div>

      {currentUserId && (
        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Sua Nota</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          star <= (hoveredRating || rating)
                            ? "fill-warning text-warning"
                            : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Comentário (opcional)</label>
                <Textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Compartilhe sua experiência..."
                  className="min-h-[100px]"
                />
              </div>

              <Button type="submit" disabled={submitting}>
                {submitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Enviar Avaliação
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {reviews.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">
            Nenhuma avaliação ainda. Seja o primeiro a avaliar!
          </p>
        ) : (
          reviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${
                              star <= review.rating
                                ? "fill-warning text-warning"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {new Date(review.created_at).toLocaleDateString("pt-BR")}
                      </span>
                    </div>
                    {review.comment && (
                      <p className="text-sm text-foreground">{review.comment}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewSection;