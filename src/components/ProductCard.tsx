import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Shield } from "lucide-react";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  seller: {
    name: string;
    rating: number;
    verified: boolean;
  };
  category: string;
}

const ProductCard = ({ id, title, price, image, seller, category }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`}>
      <Card className="group overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02]">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform group-hover:scale-110"
          />
          <Badge className="absolute left-3 top-3 bg-background/90 text-foreground">
            {category}
          </Badge>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="mb-2 line-clamp-2 font-semibold text-foreground">
            {title}
          </h3>

          {/* Seller Info */}
          <div className="mb-3 flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">{seller.name}</span>
            {seller.verified && (
              <Shield className="h-4 w-4 text-success" />
            )}
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-warning text-warning" />
              <span className="text-xs text-muted-foreground">
                {seller.rating.toFixed(1)}
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">
              R$ {price.toFixed(2)}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
