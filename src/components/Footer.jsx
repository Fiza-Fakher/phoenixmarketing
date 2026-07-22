import Container from "../components/Container";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface py-10">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 text-text-muted">
        <p className="text-sm font-medium">© {new Date().getFullYear()} Agency Portfolio. All rights reserved.</p>
      </Container>
    </footer>
  );
}