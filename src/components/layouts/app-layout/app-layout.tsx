"use client";

import { Fragment } from "react/jsx-runtime";
import { Toaster } from "sonner";
import { AppSidebar } from "@/components/layouts/app-layout/components/app-sidebar";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";

const breadcrumbs = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
];

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<SidebarProvider>
			<Toaster />

			<AppSidebar />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
					<div className="flex items-center gap-2 px-4">
						<SidebarTrigger className="-ml-1" />
						{breadcrumbs && (
							<>
								<Separator
									orientation="vertical"
									className="mr-2 data-[orientation=vertical]:h-4"
								/>
								<Breadcrumb>
									<BreadcrumbList>
										{breadcrumbs.map((breadcrumb, index) => {
											const isLast = index === breadcrumbs.length - 1;
											return (
												<Fragment key={`${breadcrumb.label}item`}>
													<BreadcrumbItem className="hidden md:block">
														<BreadcrumbLink href={breadcrumb.href}>
															{breadcrumb.label}
														</BreadcrumbLink>
													</BreadcrumbItem>
													{!isLast && (
														<BreadcrumbSeparator className="hidden md:block" />
													)}
												</Fragment>
											);
										})}
									</BreadcrumbList>
								</Breadcrumb>
							</>
						)}
					</div>
				</header>
				<div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
			</SidebarInset>
		</SidebarProvider>
	);
};
