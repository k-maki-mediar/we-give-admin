
import React, { forwardRef, useEffect, useRef } from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    indeterminate?: boolean;
}

const CheckboxProjectSelect = forwardRef<HTMLInputElement, CheckboxProps>(
    ({ indeterminate, ...rest }, ref) => {
        const defaultRef = useRef<HTMLInputElement>(null);
        const resolvedRef = ref || defaultRef;

        useEffect(() => {
            if (resolvedRef && "current" in resolvedRef && resolvedRef.current) {
                resolvedRef.current.indeterminate = indeterminate ?? false;
            }
        }, [resolvedRef, indeterminate]);

        return <input type="checkbox" ref={resolvedRef} {...rest} />;
    }
);

CheckboxProjectSelect.displayName = "CheckboxProjectSelect";

export default CheckboxProjectSelect;

