"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us - Splendies</title>
        <meta
          name="description"
          content="Explore the story behind Splendies — where sophistication meets comfort. Designed to empower every woman with elegance, modesty, and confidence."
        />
      </Head>

      <main className="relative w-full min-h-screen bg-background text-foreground">
        {/* Background Hero Section */}
        <div className="relative w-full h-screen">
          <Image
            src="/aboutbg.jpg"
            alt="About Splendies"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10" />

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute z-20 top-0 left-0 w-full h-full flex flex-col justify-center items-center px-6 text-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="text-6xl md:text-7xl font-extrabold text-primary mb-6 drop-shadow-lg cursor-pointer"
            >
              Our Story
            </motion.h2>

            <motion.div
              whileHover={{ scaleX: 1.3 }}
              transition={{ duration: 0.3 }}
              className="w-28 h-1 bg-primary rounded-full mb-10 origin-left"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white text-xl md:text-2xl leading-relaxed max-w-4xl mb-6"
            >
              At <span className="font-semibold text-primary">Splendies</span>, we
              design more than just undergarments &mdash; we create a lifestyle rooted
              in dignity, elegance, and everyday confidence. Our mission is to
              empower women to feel beautiful, modest, and bold &mdash; all at once.
            </motion.p>
          </motion.div>
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-20 max-w-5xl mx-auto px-6 py-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-foreground text-lg md:text-xl leading-relaxed mb-6"
          >
            Our curated range of{" "}
            <span className="text-primary font-medium">intimates</span>,{" "}
            <span className="text-primary font-medium">romantic essentials</span>, and{" "}
            <span className="text-primary font-medium">loungewear</span> is
            thoughtfully designed for the modern woman. Whether you&rsquo;re leading the
            day or embracing quiet evenings, we&rsquo;re here to support you with
            effortless elegance.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-foreground text-base md:text-lg list-disc pl-5 mb-6 space-y-2"
          >
            {[
              {
                title: "Unmatched Comfort",
                desc: "Experience ultra-soft fabrics and tailored fits that move with you.",
              },
              {
                title: "Elegant Modesty",
                desc: "Designs that celebrate your values without sacrificing style.",
              },
              {
                title: "Carefully Curated",
                desc: "Each piece is thoughtfully selected to ensure quality and love in every detail.",
              },
              {
                title: "Inclusive for All",
                desc: "Styles that embrace diversity and individuality &mdash; because beauty has no one definition.",
              },
            ].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-primary font-semibold">{item.title}:</span>{" "}
                {item.desc}
              </motion.li>
            ))}
          </motion.ul>

          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="text-primary font-semibold italic text-xl md:text-2xl border-l-4 border-primary pl-4 mb-6"
          >
            &ldquo;True elegance begins with inner comfort.&rdquo;
          </motion.blockquote>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{
              letterSpacing: "2px",
              color: "#f87171",
            }}
            className="text-foreground uppercase tracking-wide font-medium text-sm transition-all duration-300 cursor-pointer"
          >
            Be part of the Splendies movement &mdash; Where comfort becomes couture,
            and modesty defines modern femininity.
          </motion.p>
        </motion.div>
      </main>

      <Footer />
    </>
  );
}
