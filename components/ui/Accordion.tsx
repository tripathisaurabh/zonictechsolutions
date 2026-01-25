"use client";

import { useState } from "react";

export type AccordionItem = {
  id: string;
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="card">
            <button
              type="button"
              className="flex w-full items-center justify-between px-6 py-4 text-left text-base font-semibold text-slate-900"
              aria-expanded={isOpen}
              aria-controls={`${item.id}-content`}
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              <span>{item.title}</span>
              <span className="text-brand-600">{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen && (
              <div
                id={`${item.id}-content`}
                className="border-t border-slate-200 px-6 py-4 text-sm text-slate-600"
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
