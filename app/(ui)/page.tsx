
import Image from "next/image";
import FilterComponent from "../component/FilterComponent";
import Dashboard from "../component/Dashboard";
import TableComponent from "../component/TableComponent";

export default function Home() {
  return (
    <div className="top-[-24px] flex flex-col gap-4 relative w-[90%] items-center h-full">
      <Dashboard />
      <FilterComponent />
      <TableComponent />
    </div>
  );
}
