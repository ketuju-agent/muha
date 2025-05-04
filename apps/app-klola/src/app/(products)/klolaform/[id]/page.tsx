// apps/erp/src/app/(products)/klolaform/[id]/edit/page.tsx

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await fetch(`https://example.com/api/products/${id}`).then(res => res.json());
  return <div>Edit Page for ID: {data.name}</div>;
}

