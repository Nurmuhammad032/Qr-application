import {
  EmailComponent,
  TextArea,
  VCard,
  RequiredSignUp,
} from "../components";
import {
  Language,
  RecentActors,
  TextSnippet,
  Email,
  PictureAsPdf,
  LibraryMusic,
} from "@mui/icons-material";

export const qrGenerationType = [
  {
    id: 1,
    text: "url",
    icon: <Language sx={{ width: "1.3rem", color: "#616568" }} />,
    tooltip: "Opens the url after scanning",
  },
  {
    id: 2,
    text: "vcard",
    icon: <RecentActors sx={{ width: "1.3rem", color: "#616568" }} />,
    tooltip: "Saves contact details on the smartphone",
  },
  {
    id: 3,
    text: "text",
    icon: <TextSnippet sx={{ width: "1.3rem", color: "#616568" }} />,
    tooltip: "Displays a plain text",
  },
  {
    id: 4,
    text: "email",
    icon: <Email sx={{ width: "1.3rem", color: "#616568" }} />,
    tooltip: "Sends an email with a predefined text",
  },
  {
    id: 5,
    text: "pdf",
    icon: <PictureAsPdf sx={{ width: "1.3rem", color: "#616568" }} />,
    tooltip: "Displays a PDF",
  },
  {
    id: 6,
    text: "mp3",
    icon: <LibraryMusic sx={{ width: "1.3rem", color: "#616568" }} />,
    tooltip: "Displays MP3 file",
  },
];

export const tabs = [
  {
    id: 1,
    content: <TextArea label="Enter your website" />,
  },
  {
    id: 2,
    content: <VCard />,
  },
  {
    id: 3,
    content: <TextArea label="Enter your text" />,
  },
  {
    id: 4,
    content: <EmailComponent />,
  },
  {
    id: 5,
    content: (
      <RequiredSignUp
        heading="PDF QR Code"
        info="Display brochure, magazine, catalog, ebook, or any other PDF files."
      />
    ),
  },
  {
    id: 6,
    content: (
      <RequiredSignUp
        heading="MP3 QR Code"
        info="Share your music, audio books or podcasts inside a customizable mobile player."
      />
    ),
  },
];
