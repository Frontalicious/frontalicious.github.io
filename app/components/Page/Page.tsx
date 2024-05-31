import { css } from "styled-system/css";

const className = css``;

interface PageProps {
	children: React.ReactNode;
}

export const Page = ({ children }: PageProps) => {
	return <div className={className}>{children}</div>;
};
