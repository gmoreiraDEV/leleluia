import { IInvoice, Status } from '../../../types/api/invoice'
import {
    Container,
    Icons,
    IndicatorLine,
    Steps,
    SeparationIcon,
    TransitIcon,
    FinishIcon,
    IconBox,
    IconWrapper,
    Spacer,
} from './styles'

interface Props {
    invoice: IInvoice
}

const StatusComponent: React.FC<Props> = (props) => {
    const { invoice } = props
    return (
        <Container>
            <Steps>
                <Icons>
                    <IconWrapper>
                        <IconBox
                            active={
                                invoice?.status === Status.ON_SEPARATION
                                    ? true
                                    : false
                            }
                            alreadyPassed={
                                invoice?.status !== Status.ON_SEPARATION
                                    ? true
                                    : false
                            }
                        >
                            <SeparationIcon
                                size={40}
                                active={
                                    invoice?.status === Status.ON_SEPARATION
                                        ? true
                                        : false
                                }
                            />
                        </IconBox>
                        {invoice?.status === Status.ON_SEPARATION ? (
                            <p>Em separação</p>
                        ) : (
                            <Spacer />
                        )}
                    </IconWrapper>
                    <IconWrapper>
                        <IconBox
                            active={
                                invoice?.status === Status.ON_TRANSIT
                                    ? true
                                    : false
                            }
                            alreadyPassed={
                                invoice?.status !== Status.ON_TRANSIT &&
                                invoice?.status !== Status.ON_SEPARATION
                                    ? true
                                    : false
                            }
                        >
                            <TransitIcon
                                size={40}
                                active={
                                    invoice?.status === Status.ON_TRANSIT
                                        ? true
                                        : false
                                }
                            />
                        </IconBox>
                        {invoice?.status === Status.ON_TRANSIT ? (
                            <p>Pedido em rota</p>
                        ) : (
                            <Spacer />
                        )}
                    </IconWrapper>
                    <IconWrapper>
                        <IconBox
                            active={
                                invoice?.status === Status.FINISH ? true : false
                            }
                            alreadyPassed={
                                invoice?.status === Status.FINISH ? true : false
                            }
                        >
                            <FinishIcon
                                size={32}
                                active={
                                    invoice?.status === Status.FINISH
                                        ? true
                                        : false
                                }
                            />
                        </IconBox>
                        {invoice?.status === Status.FINISH ? (
                            <p>Pedido recebido</p>
                        ) : (
                            <Spacer />
                        )}
                    </IconWrapper>
                </Icons>
                <IndicatorLine position={invoice?.status} />
            </Steps>
        </Container>
    )
}

export default StatusComponent
