import Link from '@components/ui/link';

interface Props {
	href: string;
	className?: string;
	btnProps: React.ButtonHTMLAttributes<any>;
	isAuthorized: boolean;
}

export default function AuthMenu({
	isAuthorized,
	href,
	className,
	btnProps,
	children,
}: React.PropsWithChildren<Props>) {
	return isAuthorized ? (
		<Link href={href} className={className}>
			{children}
		</Link>
	) : (
		<button {...btnProps} className={className} />
	);
}
