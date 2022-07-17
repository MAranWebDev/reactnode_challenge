const Footer = () => {
  return (
    <footer className="mt-auto bg-light text-dark text-center border-top border-dark">
      <section className="container p-3">
        <p>&copy; Mario Arancibia {new Date().getFullYear()}</p>
      </section>
    </footer>
  );
};

export { Footer };
