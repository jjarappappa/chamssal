import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "../../styles/components/info/infoItem.module.scss";
import { BsTrashFill } from "react-icons/bs";

function InfoItem({
  title,
  children,
  isAdmin,
}: {
  title: string;
  children: string;
  isAdmin: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.infoItem}>
      <Accordion
        onClick={() => setIsOpen((prev) => !prev)}
        style={{ borderRadius: "10px" }}
        sx={{
          margin: "10px 0",
          "&:before": {
            display: "none",
          },
          width: isAdmin ? "calc(100% - 50px)" : "100%",
          display: "inline-block",
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
      {isAdmin && <BsTrashFill size={30} color="#73726F" />}
    </div>
  );
}

export default InfoItem;
