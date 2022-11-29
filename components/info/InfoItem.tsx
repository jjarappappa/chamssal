import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "../../styles/components/info/infoItem.module.scss";

function InfoItem({ title, children }: { title: string; children: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Accordion
      onClick={() => setIsOpen((prev) => !prev)}
      style={{ borderRadius: "10px" }}
      sx={{
        margin: "10px 0",
        "&:before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary>
        {title}
        <span className={!isOpen ? styles.icon : styles.icon_reverse}>
          <ExpandMoreIcon />
        </span>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}

export default InfoItem;
