//need auth to get to this page
import Link from 'next/link'

export default () => (
  <div>
    <p>Thanks for signing up! We will begin monitoring clothing auction sites for your query.</p>
  	<p>Each additional query costs $1 / month. If you'd like add more queries to monitor, head over to your <Link href="/dash">dashboard</Link></p>
  </div>
)