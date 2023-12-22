
import {Container} from 'reactstrap'
import '../../Styles/Common-section.css'
const CommonSection = ({title}) => {
  return <section className="common_section ">
<Container className="text_center">
<h1>{title}</h1>
</Container>
  </section>
}

export default CommonSection
