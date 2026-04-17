package com.vyns.banking_system.dto;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class AccountResponseDto {
    private Long id;
    private String accountHolderName;
    private BigDecimal balance;
}
