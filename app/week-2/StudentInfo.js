import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <p>Name: Dilshan Sandhu</p>
      <p>
        GitHub:{" "}
        <Link href="https://github.com/DilshanSandhu/cprg306-assignments">
          DilshanSandhu/cprg306-assignments
        </Link>
      </p>
    </div>
  );
}