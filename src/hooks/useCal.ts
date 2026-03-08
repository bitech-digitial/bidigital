"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function useCal() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#2563eb" },
          dark: { "cal-brand": "#2563eb" },
        },
        hideEventTypeDetails: true,
        layout: "month_view",
      });
    })();
  }, []);
}
