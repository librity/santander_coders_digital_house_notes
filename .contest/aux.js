import java.util.Base64;
import spray.json._;

case class Payload(sub: String, name: String, admin: Boolean, exp: Int) // exp is the expiration date

object ExpirationDateTest extends DefaultJsonProtocol {

implicit val payloadJsonFormat: RootJsonFormat[Payload] = jsonFormat4(Payload) // defines a contract to deserialize the JSON object

val jwtToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5MjQiLCJyb2xlcyI6WyJST0xFX0NBTkRJREFURSJdLCJpYXQiOjE1NzU3NjA1NzMsImV4cCI6MTU3NTc2NDE3M30.jGc49bNKsKWfIPky8CYiL8xMupHGzM5L2L0fDxE27JitF23u1dQo2EcCH1Y2X37LE5g5JMoU2Y12_U3QgY"

val jwtTokenPayload = jwtToken.split('.')(1)

val expirationDate = new String(Base64.getDecoder.decode(jwtTokenPayload)).parseJson.convertTo[Payload].exp

def getExpirationDate: Int = {
   expirationDate
}
}
println(ExpirationDateTest.getExpirationDate)
