import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

interface ParallaxProps {
  children: React.ReactNode;
  offset?: number;
  direction?: "vertical" | "horizontal";
  className?: string;
}

const Parallax = ({
  children,
  offset = 50,
  direction = "vertical",
  className = "",
}: ParallaxProps) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  const x = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  const springY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const springX = useSpring(x, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      ref={ref}
      style={{
        y: direction === "vertical" ? springY : 0,
        x: direction === "horizontal" ? springX : 0,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Parallax;
