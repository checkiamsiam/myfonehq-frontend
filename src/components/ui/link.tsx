import NextLink, { LinkProps as NextLinkProps } from 'next/link';

interface LinkProps extends NextLinkProps {
	className?: string;
}

export default function Link({
	href,
	children,
	...props
}: React.PropsWithChildren<LinkProps>) {
	return (
		<NextLink href={href}>
			<a {...props}>{children}</a>
		</NextLink>
	);
}
