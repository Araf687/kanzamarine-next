import { Button } from "@/components/ui/button"
import { useInquiryCart } from "@/hooks/useInquiryCart"

export default function ProductCard({ product }) {

  const { addItem, removeItem, isInCart } = useInquiryCart()

  const inCart = isInCart(product.id)

  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-lg transition">

      {/* IMAGE */}
      <div className="relative h-40 sm:h-48 md:h-56 bg-muted overflow-hidden">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />

      </div>

      {/* CONTENT */}
      <div className="p-4">

        <p className="text-[10px] sm:text-xs text-accent font-semibold uppercase mb-1">
          {product.category}
        </p>

        <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2">
          {product.name}
        </h3>

        <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* BRAND TAGS */}
        <div className="flex flex-wrap gap-1 mb-3">

          {product.brands?.slice(0,3).map((b) => (
            <span
              key={b}
              className="text-[9px] sm:text-[10px] px-2 py-0.5 bg-muted rounded-full"
            >
              {b}
            </span>
          ))}

        </div>

        {/* BUTTON */}
        <Button
          size="sm"
          className="w-full"
          onClick={() =>
            inCart ? removeItem(product.id) : addItem(product)
          }
        >
          {inCart ? "Remove Inquiry" : "Add Inquiry"}
        </Button>

      </div>

    </div>
  )
}