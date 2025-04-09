'use client';
import { AnimatePresence } from 'framer-motion';
import { MouseEvent, useState } from 'react';
import Burger from './Burger/Burger';
import Stairs from './Stairs/Stairs';
import Menu from './Menu/Menu';

export default function Menus() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div
      onContextMenu={(e: MouseEvent) => {
        e.preventDefault();
      }}
      className="fixed top-0 left-0 z-[99]"
    >
      <Burger
        openMenu={() => {
          setMenuIsOpen(true);
        }}
      />
      <AnimatePresence mode="wait">
        {menuIsOpen && (
          <>
            <Stairs />
            <Menu
              closeMenu={() => {
                setMenuIsOpen(false);
              }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
