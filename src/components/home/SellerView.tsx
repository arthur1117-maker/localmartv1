"use client";
import { PageHeader }      from "@/components/layout";
import { SellerDashboard } from "@/components/seller";

export function SellerView() {
  return (
    <>
      <PageHeader
        title="🏪 Худалдагчийн самбар"
        subtitle="Бараагаа удирдаж, захиалгаа хянаарай"
      />
      <div className="max-w-4xl mx-auto px-5 py-8">
        <SellerDashboard />
      </div>
    </>
  );
}
