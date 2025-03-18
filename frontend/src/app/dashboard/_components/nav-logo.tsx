"use client";

import { useSidebar } from "@/components/atoms/sidebar";
import { motion } from "framer-motion";
import { LogoIcon } from "@/components/atoms/logo-icon";

const NavLogo = () => {
  const { open } = useSidebar();

  return (
    <div className="p-2 flex gap-6  items-center">
      <LogoIcon
        size={open ? 62 : 24}
        className="text-foreground text-9xl flex-shrink-0"
      />
      <motion.div
        animate={{ opacity: open ? 1 : 0, width: open ? "100%" : 0 }}
        transition={{ duration: 0.3 }}
        className="text-2xl font-black "
      >
        TOMAN
      </motion.div>
    </div>
  );
};

export default NavLogo;
