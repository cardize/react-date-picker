import { useState, forwardRef } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { tr } from "date-fns/locale"
import 'react-datepicker/dist/react-datepicker.css'
import './styles.css'
registerLocale("tr", tr)

const Home = () => {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(null)
    const [monthsToShow, setMonthsToShow] = useState(1)

    const onChange = (dates) => {
        const [start, end] = dates
        setStartDate(start)
        setEndDate(end)
    }


    const onMothsToWiewChange = (event) => {
        setMonthsToShow(event.target.value)
    }

    return (
        <div className='w-full p-[30px] container mx-auto flex flex-col items-center justify-center'>
            <div className='p-[20px]'>
                <div className='flex justify-center items-center'>
                    <h1 className='mr-[20px] font-bold text-[16px]'>Aylar</h1>
                    <select
                        className="p-[10px] font-normal text-black rounded-[5px]"
                        name="months"
                        id="months"
                        form="months"
                        onChange={onMothsToWiewChange}
                    >
                        <option
                            key={1}
                            value={1}>1
                        </option>
                        <option
                            key={2}
                            value={2}>2
                        </option>
                        <option
                            key={3}
                            value={3}>3
                        </option>
                        <option
                            key={6}
                            value={6}>6
                        </option>
                        <option

                            key={12}
                            value={12}>12
                        </option>
                    </select>
                </div>

                <div className='mt-[50px] ml-[50px] flex items-center justify-between'>
                    <div className='mr-[10px] w-[20px] h-[20px] bg-white'></div>
                    <h1 className='mr-[50px]'>Müsait</h1>
                    <div className='mr-[10px] w-[20px] h-[20px] bg-red-500'></div>
                    <h1 className='mr-[50px]'>Dolu</h1>
                    <div className='mr-[10px] w-[20px] h-[20px] bg-orange-500'></div>
                    <h1 className='mr-[50px]'>Ödeme Bekliyor</h1>
                    <div className='mr-[10px] w-[20px] h-[20px] bg-gradient-to-br from-white via-white to-red-500 '></div>
                    <h1 className='mr-[50px]'>Giriş Çıkış</h1>
                </div>

            </div>
            <DatePicker
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()}
                monthsShown={monthsToShow}
                locale={tr}
                selectsRange
                inline
            />

        </div>

    )
}

export default Home

