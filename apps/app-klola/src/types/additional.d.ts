import 'react';

declare module 'react' {
    // Override ForwardRefExoticComponent to make it compatible with Next.js Server Components
    interface ForwardRefExoticComponent<P = any> extends React.FC<P> {
        $$typeof: symbol;
        render: React.ForwardRefRenderFunction<any, P>;
    }
}