"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function PromoCard() {
	const [isVisible, setIsVisible] = useState(true);
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		const hidden = localStorage.getItem("hidePromo");
		if (hidden) setIsVisible(false);
	}, []);

	const hidePromo = (e: React.MouseEvent) => {
		e.preventDefault();
		setIsVisible(false);
		localStorage.setItem("hidePromo", "true");
	};

	if (!isVisible) return null;

	return (
		<div className="w-full opacity-60 dark:opacity-80 hover:opacity-100">
			<AnimatePresence>
				<motion.a
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					className={
						"border border-zinc-200 dark:border-zinc-800 p-2 rounded-lg w-full my-2 bg-white dark:bg-zinc-900 flex flex-col gap-1  hover:opacity-100 shadow-none transition-all hover:shadow-sm relative group "
					}
					href={"https://www.gptplus.ca"}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<button
						onClick={hidePromo}
						className="absolute -right-2 -top-2 text-xs px-1 py-1 rounded-full bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors border border-zinc-200 dark:border-zinc-800"
					>
						<X className="w-3 h-3" />
					</button>

					<Image
						src={
							"https://assets.ohevan.com/img/b208f36da990318f67fc125beb069dde.jpg"
						}
						alt={"GPT Plus 共享"}
						className={"rounded-sm dark:brightness-75"}
						width={1455}
						height={764}
					/>

					<h3
						className={
							"font-bold dark:text-white flex flex-row justify-between items-center"
						}
					>
						<span>ChatGPT Plus 共享</span>
						<span
							className={
								"text-[0.5rem] dark:bg-zinc-800 dark:text-zinc-300 px-1.5 py-0.5 rounded-full bg-zinc-100 text-zinc-800"
							}
						>
							推广
						</span>
					</h3>
					<div className="text-xs dark:text-gray-300">
						<AnimatePresence mode="wait">
							<motion.div
								key={isHovered ? "expanded" : "collapsed"}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.2 }}
							>
								{isHovered ? (
									<>
										<p>
											国内镜像直连，官方一致，支持 GPT-4o 以及 o1 最新模型，由
											Evan 本人搭建，目前已稳定运行两年。
										</p>
										<p>
											优惠码 <code>REDEFINE24</code> 立减 3 元，折后仅需 24.99
											元/月起。
										</p>
									</>
								) : (
									<p>国内镜像直连，官方一致，支持 GPT-4o 以及 o1 最新模型</p>
								)}
							</motion.div>
						</AnimatePresence>
					</div>
				</motion.a>
			</AnimatePresence>
		</div>
	);
}
