import { useState, ReactNode } from "react";

interface CheckboxOrgTypeProps {
    id: string;
    label: ReactNode;
    isSelected: boolean;
    onSelect: () => void;
}

const CheckboxOrgType: React.FC<CheckboxOrgTypeProps> = ({
    id,
    label,
    isSelected,
    onSelect,
}) => {
    return (
        <div>
            <label
                htmlFor={id}
                className="flex cursor-pointer select-none items-start"
            >
                <div className="relative mt-1">
                    <input
                        type="radio"
                        id={id}
                        className="sr-only"
                        checked={isSelected}
                        onChange={onSelect}
                    />
                    <div
                        className={`mr-4 flex h-5 w-5 items-center justify-center rounded-full border ${isSelected ? "border-primary" : "border-stroke"
                            }`}
                    >
                        <span
                            className={`h-2.5 w-2.5 rounded-full bg-transparent ${isSelected && "!bg-primary"
                                }`}
                        >
                            {" "}
                        </span>
                    </div>
                </div>
                {label}
            </label>
        </div>
    );
};

export default CheckboxOrgType;
