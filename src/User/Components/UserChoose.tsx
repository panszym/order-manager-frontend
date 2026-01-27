interface Props {
    options: string[];
    name: string;
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onBlur: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    error?: string;
    touched?: boolean;
}



export const UserChoose = ({
    options,
    id,
    name,
    value,
    onChange,
    onBlur,
    error,
    touched
}: Props) => {
    return(
        <div className="mb-3">
      <select
        name={name}
        id={id}
        className="form-control"
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      >

        {options.map((option) => (
          <option key={option} value={option} label={option} />
        ))}
      </select>
      {touched && error ? (
        <div className="text-danger fst-italic">{error}</div>
      ) : null}
    </div>
    )
}