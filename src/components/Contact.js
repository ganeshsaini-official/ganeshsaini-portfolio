<section id="contact" className="scroll-mt-24 py-16 max-w-2xl mx-auto text-center">
  <motion.h2
    className="text-3xl font-semibold mb-6"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    Contact Me 📬
  </motion.h2>
  <p className="text-gray-400 mb-8">
    Feel free to reach out via this form!
  </p>
  <form
    className="space-y-6"
    onSubmit={(e) => {
      e.preventDefault();
      alert("Message sent! 🚀");
    }}
  >
    <input
      type="text"
      placeholder="Your Name"
      required
      className={`w-full px-4 py-2 rounded-lg border focus:outline-none ${
        darkMode
          ? "bg-gray-800 border-gray-700 text-white"
          : "bg-gray-100 border-gray-300 text-gray-900"
      }`}
    />
    <input
      type="email"
      placeholder="Your Email"
      required
      className={`w-full px-4 py-2 rounded-lg border focus:outline-none ${
        darkMode
          ? "bg-gray-800 border-gray-700 text-white"
          : "bg-gray-100 border-gray-300 text-gray-900"
      }`}
    />
    <textarea
      rows="5"
      placeholder="Your Message"
      required
      className={`w-full px-4 py-2 rounded-lg border focus:outline-none ${
        darkMode
          ? "bg-gray-800 border-gray-700 text-white"
          : "bg-gray-100 border-gray-300 text-gray-900"
      }`}
    ></textarea>
    <Button type="submit" className="w-full">
      Send Message
    </Button>
  </form>
</section>
