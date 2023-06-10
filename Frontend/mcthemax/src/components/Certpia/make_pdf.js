import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { uploadPdf } from "../../api/udrimsApi";

const makePdf = {
  viewWithPdf: async () => {
    const imageFile = await makePdf._converToImg();

    const pdf = makePdf._converToPdf(imageFile);

    makePdf._sendToServer(pdf);
  },
  _converToImg: async () => {
    const paper = document.querySelector(".div_container > .div_paper");
    const canvas = await html2canvas(paper);
    console.log(canvas);
    const imageFile = canvas.toDataURL("image/png", 1.0);
    console.log(imageFile);
    return imageFile;
  },
  _converToPdf: (imageFile) => {
    const doc = new jsPDF("p", "mm", "a4");
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    doc.addImage(imageFile, "JPEG", 0, 0, pageWidth, pageHeight);

    window.open(doc.output("bloburl"));

    const pdf = new File([doc.output("blob")], "test.pdf", {
      type: "application/pdf",
    });
    return pdf;
  },
  _sendToServer: async (pdf) => {
    const formData = new FormData();
    formData.append("file", pdf);
    formData.append("type", "pdf");
    formData.append("name", "test");

    await uploadPdf(formData).then((res) => {
      console.log(res);
    });

    // const res = await axios.post("/pdf/upload_file", formData, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // });

    // if (res.data.code === 1) {
    //   window.open(`${util.mode()}${res.data.link}`);
    // }
    // console.log({ res });

    // setTimeout(() => {
    //   makePdf._isLoading = false;
    // }, 2000);
  },
};

export default makePdf;
