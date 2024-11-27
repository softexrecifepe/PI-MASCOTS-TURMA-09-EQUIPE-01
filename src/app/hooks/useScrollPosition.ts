import { useState, useEffect } from "react";

export function UseScrollPosition(scrollLimit: number) {
  // chamando o useState
  const [isScrolled, setIsScrolled] = useState(false);

  // chamndo o useEffect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > scrollLimit);
    };

    // criando o eventListener
    window.addEventListener("scroll", handleScroll);

    // limpando o eventListener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollLimit]); //array de dependência

  return isScrolled;
}
