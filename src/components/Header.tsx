import CashFlowPro from '../assets/CashFlowPro.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns, faChartLine, faDollarSign, faGear, faTableColumns } from '@fortawesome/free-solid-svg-icons'

export function Header() {
    return (
        <div className="rounded-lg bg-white shadow-xl h-auto">

            <div className='flex items-center justify-center mt-10'>
                <img src={CashFlowPro} alt="Logo" className="w-44 h-9" />
            </div>

            <div className='pt-12 pl-12 pb-12'>
                <div className='flex justify-end flex-col'>
                    <strong className='text-gray-700 mb-2 text-xs'>Geral</strong>

                    <div className='flex flex-col gap-4'>
                        <button className='flex items-center justify-start bg-gradient-to-r from-orange-600 to-orange-300 pt-3 pb-3 pr-5 pl-5 rounded-l-lg text-white'>
                            <FontAwesomeIcon icon={faTableColumns} />
                            <span className='ml-2'>Dashboard</span>
                        </button>

                        <button className='flex items-center justify-start pt-3 pb-3 pr-5 pl-5 rounded-l-lg text-gray-700'>
                            <FontAwesomeIcon icon={faDollarSign} />
                            <span className='ml-2'>Transações</span>
                        </button>

                        <button className='flex items-center justify-start pt-3 pb-3 pr-5 pl-5 rounded-l-lg text-gray-700'>
                            <FontAwesomeIcon icon={faBuildingColumns} />
                            <span className='ml-2'>Bancos</span>
                        </button>

                        <button className='flex items-center justify-start pt-3 pb-3 pr-5 pl-5 rounded-l-lg text-gray-700'>
                            <FontAwesomeIcon icon={faChartLine} />
                            <span className='ml-2'>Relatórios</span>
                        </button>
                    </div>

                    <strong className='text-gray-700 mb-2 mt-20 text-xs'>Suporte</strong>

                    <div className='flex flex-col gap-4'>
                        <button className='flex items-center justify-start pt-3 pb-3 pr-5 pl-5 rounded-l-lg text-gray-700'>
                            <FontAwesomeIcon icon={faGear} />
                            <span className='ml-2'>Configurações</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}