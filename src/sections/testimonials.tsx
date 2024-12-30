import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials } from "../data/testimonials";
import { TestimonialCard } from "../components";

export function TestimonialPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const startAutoScroll = useCallback(() => {
    if (autoScrollIntervalRef.current) return;
    autoScrollIntervalRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 5000);
  }, [emblaApi]);

  const stopAutoScroll = useCallback(() => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (isAutoScrolling) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }

    return () => stopAutoScroll();
  }, [isAutoScrolling, startAutoScroll, stopAutoScroll]);

  const handleMouseEnter = () => setIsAutoScrolling(false);
  const handleMouseLeave = () => setIsAutoScrolling(true);

  return (
    <div id="testimonial" className="relative max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
      <div className="overflow-hidden" ref={emblaRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="flex space-x-4">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
      {/* Navigation Buttons */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        onClick={scrollPrev}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        onClick={scrollNext}
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>
      {/* Dots Navigation */}
      <div className="flex justify-center mt-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${index === selectedIndex ? "bg-primary" : "bg-gray-300"}`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
