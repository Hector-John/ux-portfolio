import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Hector delivered an exceptional e-commerce redesign that increased our conversion rates by 40%. His attention to user flows and mobile optimization made the shopping experience seamless for our customers.",
      name: "Cynthia Yonga",
      designation: "Founder Blaze Na Yonga",
      src: "/hero-image.png",
    },
    {
      quote:
        "He delivered a website that perfectly captured our NGO's mission. His intuitive design tripled our volunteer sign-ups and made complex information accessible to all audiences.",
      name: "Milango ya Tumaini",
      designation: "Myto NGO",
      src: "/hero-image.png",
    },
    {
      quote:
        "He delivered outstanding UI/UX training to our students. His practical approach and real-world examples prepared them for industry challenges better than any curriculum we've used before.",
      name: "IYF Education Team",
      designation: "International Youth Foundation",
      src: "/hero-image.png",
    },
    {
      quote:
        "He delivered a complete transformation of our law firm's digital presence. His client portal redesign reduced support requests by 45% while maintaining the professionalism our clients expect.",
      name: "Sarah Main",
      designation: "Partner at Davis & Main",
      src: "/hero-image.png",
    },
    {
      quote:
        "He delivered a design system that unified our product experience across 12 modules. His component-based approach improved our development speed and user satisfaction metrics.",
      name: "Raj Patel",
      designation: "Head of Product at TechSolutions",
      src: "/hero-image.png",
    },
    {
      quote:
        "Delivered insights through user research that revealed pain points we'd overlooked. His mobile app design solution became our most successful product launch to date.",
      name: "Lisa Zhang",
      designation: "UX Director at Finova",
      src: "/hero-image.png",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}