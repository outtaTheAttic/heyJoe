import {LoaderIcon} from "lucide-react";

function PageLoader() {
	return (
		<div className="flex items-center justify-center h-screen absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_2px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_2px,transparent_1px)] bg-[size:14px_24px]">
		  <LoaderIcon className="size-10 animate-spin" />
		</div>
	)
}
export default PageLoader;
