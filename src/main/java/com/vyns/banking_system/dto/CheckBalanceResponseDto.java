package com.vyns.banking_system.dto;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class CheckBalanceResponseDto {
    private BigDecimal balance;
}
