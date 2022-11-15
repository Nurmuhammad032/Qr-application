import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const frames = [
  {
    id: 1,
    img: "https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png",
  },
  {
    id: 2,
    img: "https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png",
  },
];

const HomeAccordion = ({setData}) => {
  return (
    <div>
      <Accordion
        sx={{
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          sx={{ background: "#f7f7f7" }}
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Frame</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ background: "#f7f7f7" }}>
          <div className="flex space-x-3 flex-wrap">
            {frames.map((fr) => (
              <div
                key={fr.id}
                onClick={() => setData(fr.img)}
                className="w-[4rem] h-[4rem] p-2 border-[1px] border-gray-300 hover:border-gray-600 cursor-pointer rounded-sm"
              >
                <img
                  src={fr.img}
                  alt="qrframe"
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default HomeAccordion;
