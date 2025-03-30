
import AmazingDeals from "@/components/AmazingDeals";
import FAQ from "@/components/FAQs";
import FeaturedItems from "@/components/FeaturedItems";
import { ToastContainer } from "react-toastify";
const faqItems = [
  {
    question: "What is Bundo?",
    answer: "Adequate Answer",
  },
  {
    question: "What kind of businesses can use Bundo?",
    answer: "Adequate Answer",
  },
  {
    question: "Must I have a CAC document to use Bundo?",
    answer: "Adequate Answer",
  },
  {
    question: "What kind of products can I buy on Bundo?",
    answer: "Adequate Answer",
  },
  {
    question: "Is Bundo free to use?",
    answer: "Adequate Answer",
  },
  {
    question: "How can I join the team?",
    answer: "Adequate Answer",
  },
];
export default function Home() {
  return (
    <div className="">
       <ToastContainer
        position="top-right"
        />
      <FeaturedItems/>
      <AmazingDeals/>
      <FAQ items={faqItems} />
    </div>
  );
}
