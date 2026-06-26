import { LayoutGrid } from "lucide-react";

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}){
    const { id } = await params

    return(
        <div className="w-full flex flex-col gap-3 p-5">
          <div className="flex items-center gap-2 justify-end">
            <div className="text-sm m-0">Dashboard / Projects / 1</div>
            <LayoutGrid className="text-blue-700" />
          </div>
        </div>
    )
}
