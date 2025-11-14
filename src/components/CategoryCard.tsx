import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  name: string;
  icon: LucideIcon;
  itemCount: number;
  href: string;
}

const CategoryCard = ({ name, icon: Icon, itemCount, href }: CategoryCardProps) => {
  return (
    <Link to={href}>
      <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:scale-105">
        <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-5" />
        <div className="relative">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="mb-2 font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground">
            {itemCount.toLocaleString()} itens
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
