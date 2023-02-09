import {
  Language,
  RecentActors,
  TextSnippet,
  Email,
  PictureAsPdf,
  LibraryMusic,
  Collections,
} from "@mui/icons-material";

import {
  CreateWeb,
  CreateVCard,
  CreateText,
  CreateEmail,
  CreatePdf,
  CreateMusic,
  CreateImage,
} from "../components";

export const tabTypes = [
  {
    id: 1,
    work: true,
    icon: <Language sx={{ fontSize: "2rem", color: "#616568" }} />,
    title: "website",
    text: "Link to any page on the web",
    imgUrl:
      "https://app.qr-code-generator.com/img/generator/preview-type-url_static-en.jpg",
  },
  {
    id: 2,
    work: false,
    icon: <RecentActors sx={{ fontSize: "2rem", color: "#616568" }} />,
    title: "vcard",
    text: "Share contact details",
    imgUrl:
      "https://app.qr-code-generator.com/img/generator/preview-type-vcard-en.jpg",
  },
  {
    id: 3,
    work: true,
    icon: <TextSnippet sx={{ fontSize: "2rem", color: "#616568" }} />,
    title: "text",
    text: "Display a short message",
    imgUrl:
      "https://app.qr-code-generator.com/img/generator/preview-type-text-en.jpg",
  },
  {
    id: 4,
    work: true,
    icon: <Email sx={{ fontSize: "2rem", color: "#616568" }} />,
    title: "email",
    text: "Get email messages",
    imgUrl:
      "https://app.qr-code-generator.com/img/generator/preview-type-email-en.jpg",
  },
  {
    id: 5,
    work: false,
    icon: <PictureAsPdf sx={{ fontSize: "2rem", color: "#616568" }} />,
    title: "PDF",
    text: "Link to a mobile-optimized PDF",
    imgUrl:
      "https://app.qr-code-generator.com/img/generator/preview-type-dpdf-en.jpg",
  },
  {
    id: 6,
    work: false,
    icon: <LibraryMusic sx={{ fontSize: "2rem", color: "#616568" }} />,
    title: "MP3",
    text: "Play an audio file",
    imgUrl:
      "https://app.qr-code-generator.com/img/generator/preview-type-dmp3-en.jpg",
  },
  {
    id: 7,
    work: false,
    icon: <Collections sx={{ fontSize: "2rem", color: "#616568" }} />,
    title: "Images",
    text: "Show a series of photos",
    imgUrl:
      "https://app.qr-code-generator.com/img/generator/preview-type-dgallery-en.jpg",
  },
];

export const generateQrCodeComponents = [
  {
    id: 1,
    content: <CreateWeb />,
  },
  {
    id: 2,
    content: <CreateVCard />,
  },
  {
    id: 3,
    content: <CreateText />,
  },
  {
    id: 4,
    content: <CreateEmail />,
  },
  {
    id: 5,
    content: <CreatePdf />,
  },
  {
    id: 6,
    content: <CreateMusic />,
  },
  {
    id: 7,
    content: <CreateImage />,
  },
];
