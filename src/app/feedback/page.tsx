import { FeedbackPage } from "@/features/feedback";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Feedback",
  path: "/feedback",
  description:
    "Read feedback from people who have worked, built, and collaborated with Taha Nabavi.",
  keywords: ["Taha Nabavi feedback", "Developer testimonials", "Collaboration feedback"],
});

const Page = () => {
  return <FeedbackPage />;
};

export default Page;
