import { ReactNode } from 'react';
interface ContainerProps {
    children: ReactNode;
    heading: string;
}
const Container = ({ children, heading
}: ContainerProps) => {
    return (
        <>
            <div className="container mt-5">
                <h2 className="mb-4">{heading}</h2>
                {children}
            </div>
        </>
    );
};

export default Container;