import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex flex-col gap-5">
      <p className="text-2xl text-[#76C6E0]">
        Frequently Asked Questions (FAQ)
      </p>
      <button className="px-6 py-2 rounded-md bg-[#07EAD3] text-black w-fit self-end">
        Contact Support
      </button>
      <div className="flex flex-col gap-2">
        <Accordion
          defaultExpanded
          sx={{ backgroundColor: "#011532", color: "#ffffff" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#ffffff" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Question 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Answer 1</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ backgroundColor: "#011532", color: "#ffffff" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#ffffff" }} />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">Question 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Answer 2</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ backgroundColor: "#011532", color: "#ffffff" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#ffffff" }} />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">Question 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Answer 3</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
