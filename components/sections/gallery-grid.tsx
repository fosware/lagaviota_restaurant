import Image from "next/image";
import { galleryImages } from "@/lib/site";
import { cn } from "@/lib/utils";

export function GalleryGrid({ limit }: { limit?: number }) {
  const images = limit ? galleryImages.slice(0, limit) : galleryImages;

  return (
    <div className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {images.map((image, index) => (
        <figure
          key={image.src}
          className={cn(
            "group relative overflow-hidden rounded-lg border bg-card shadow-sm",
            index === 0 && "sm:col-span-2 sm:row-span-2",
            !limit && index === 3 && "lg:row-span-2",
            !limit && index === 6 && "lg:col-span-2",
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={
              index === 0
                ? "(min-width: 1024px) 50vw, (min-width: 640px) 100vw, 100vw"
                : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            }
            loading={index < 2 ? "eager" : "lazy"}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/72 via-foreground/38 to-transparent p-4 pt-16 text-background">
            {index === 0 ? (
              <span className="mb-2 inline-flex rounded-md bg-secondary px-2.5 py-1 text-xs font-black uppercase text-secondary-foreground">
                Fresh from the kitchen
              </span>
            ) : null}
            <span className="block text-base font-black">{image.title}</span>
            <span className="mt-1 block text-xs font-bold text-background/78">
              {index === 0 ? "Fresh, colorful and ready to share" : "Served at La Gaviota"}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
