import Link from "next/link"

export default function Homepage() {
	return (
		<>
			<h1>Homepage</h1>
			<Link href="/sign-up">
				<a>Sign up</a>
			</Link>
			<Link href="/sign-in">
				<a>Sign In</a>
			</Link>
		</>
	)
}