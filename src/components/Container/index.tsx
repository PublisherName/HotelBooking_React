import { ReactNode } from 'react';
interface ContainerProps {
    children: ReactNode;
}
const Container = ({ children,
}: ContainerProps) => {
    return (
        <>
            {children}
        </>
    );
};

export default Container;