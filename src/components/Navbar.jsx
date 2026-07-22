import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "./Container";
import Button from "../components/Button";

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-line bg-white/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
    >
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-wide text-text flex items-center gap-1 group">
          Agency
          <motion.span 
            className="text-brand inline-block"
            whileHover={{ scale: 1.5, rotate: 180 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            .
          </motion.span>
        </Link>
        <Button variant="outline" to="/projects">View Portfolio</Button>
      </Container>
    </motion.header>
  );
}