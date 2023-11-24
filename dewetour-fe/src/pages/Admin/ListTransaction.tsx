import { Container, Table } from "react-bootstrap"
import NavbarDefault from "../../components/NavbarDefault"
import search from '../../assets/dewetour-asset/search-1.svg'

export default function ListTransaction() {
  return (
    <>
        <NavbarDefault />
        <Container fluid className="plain-backdrop mt-5 py-5 vh-100">
            <div className="d-flex justify-content-center">
                <Table striped hover className="mt-5 list-table">
                    <thead>
                        <tr>
                            <th className="text-center py-3">No</th>
                            <th className="text-center py-3">Users</th>
                            <th className="text-center py-3">Trip</th>
                            <th className="text-center py-3">Bukti Transfer</th>
                            <th className="text-center py-3">Status Payment</th>
                            <th className="text-center py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center py-3">1</td>
                            <td className="text-center py-3">Zulfikar Rofi</td>
                            <td className="text-center py-3">6D/4N Exciting Summer...</td>
                            <td className="text-center py-3">bca.jpg</td>
                            <td className="text-center py-3">Approved</td>
                            <td className="text-center py-3"><img src={search} alt="" /></td>
                        </tr>
                        <tr>
                            <td className="text-center py-3">1</td>
                            <td className="text-center py-3">Zulfikar Rofi</td>
                            <td className="text-center py-3">6D/4N Exciting Summer...</td>
                            <td className="text-center py-3">bca.jpg</td>
                            <td className="text-center py-3">Approved</td>
                            <td className="text-center py-3"><img src={search} alt="" /></td>
                        </tr>
                        <tr>
                            <td className="text-center py-3">1</td>
                            <td className="text-center py-3">Zulfikar Rofi</td>
                            <td className="text-center py-3">6D/4N Exciting Summer...</td>
                            <td className="text-center py-3">bca.jpg</td>
                            <td className="text-center py-3">Approved</td>
                            <td className="text-center py-3"><img src={search} alt="" /></td>
                        </tr>
                        <tr>
                            <td className="text-center py-3">1</td>
                            <td className="text-center py-3">Zulfikar Rofi</td>
                            <td className="text-center py-3">6D/4N Exciting Summer...</td>
                            <td className="text-center py-3">bca.jpg</td>
                            <td className="text-center py-3">Approved</td>
                            <td className="text-center py-3"><img src={search} alt="" /></td>
                        </tr><tr>
                            <td className="text-center py-3">1</td>
                            <td className="text-center py-3">Zulfikar Rofi</td>
                            <td className="text-center py-3">6D/4N Exciting Summer...</td>
                            <td className="text-center py-3">bca.jpg</td>
                            <td className="text-center py-3">Approved</td>
                            <td className="text-center py-3"><img src={search} alt="" /></td>
                        </tr><tr>
                            <td className="text-center py-3">1</td>
                            <td className="text-center py-3">Zulfikar Rofi</td>
                            <td className="text-center py-3">6D/4N Exciting Summer...</td>
                            <td className="text-center py-3">bca.jpg</td>
                            <td className="text-center py-3">Approved</td>
                            <td className="text-center py-3"><img src={search} alt="" /></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Container>
    </>
  )
}
