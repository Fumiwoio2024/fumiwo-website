import { MutableRefObject, useEffect, useRef, useState } from "react";

export const useOnScreen = (ref: MutableRefObject<HTMLDivElement | null>) => {
	const [isOnScreen, setIsOnScreen] = useState(false);
	const observerRef = useRef<IntersectionObserver>(null);

	useEffect(() => {
		// @ts-ignore
		observerRef.current = new IntersectionObserver(
			([entry]) => setIsOnScreen(entry.isIntersecting),
			{
				rootMargin: "0px",
				threshold: 1.0,
			},
		);
	}, []);

	useEffect(() => {
		observerRef.current?.observe(ref.current!);

		return () => {
			observerRef.current?.disconnect();
		};
	}, [ref]);

	return isOnScreen;
};